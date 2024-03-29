include .env
start:
	docker-compose up

down:
	docker-compose down

prod:
	@echo "\n[ Spinning up Docker Compose production environment ]"
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build

rm-all:
	make rmi && make rmv
	
rmi:
	@echo "\n[ Removing Containers, networks & images ]"
	docker-compose down --rmi all

rmv:
	@echo "\n[ Removing all attached volumes ]"
	docker-compose down -v

run:
	@echo "\n[ Running prod image ]"
	docker run -p 80:80 --env-file ./.env ${REGISTRY_NAME}.azurecr.io/${REGISTRY_IMAGE}:${REGISTRY_TAG}

unit-test:
	@echo "\n[ Running unit test using test runner... ]"
	npm run test

unit-test-open:
	@echo "\n[ Opening unit test runner window, make sure X Server is on ... ]"
	npm run test:open

nyc:
	npx nyc report --reporter=text-summary

nyc-text:
	npx nyc report --reporter=text

nyc-lcov:
	npx nyc report --reporter=lcov

acr-build:
	@echo "\n[ Using Azure Container Registry to build images... ]"
	az acr build --file Dockerfile --registry ${REGISTRY_NAME} --image ${REGISTRY_IMAGE}:${REGISTRY_TAG} .

# in case Error: Retry policy did not allow for a retry: , HTTP status code=Unknown, Exception=('Connection aborted.'.. happens
build:
	@echo "\n[ Build API production image ]"
	docker build . --target prod \
	--tag ${REGISTRY_NAME}.azurecr.io/${REGISTRY_IMAGE}:${REGISTRY_TAG}

login:
	@echo "\n[ log into private registry ]"
	az acr login --name ${REGISTRY_NAME}

publish: login
	@echo "\n[ publish production grade images ]"
	docker push ${REGISTRY_NAME}.azurecr.io/${REGISTRY_IMAGE}:${REGISTRY_TAG}
	@echo "\n[ Verifying if push was successfull ACR repo list... ]"
	az acr repository list -n ${REGISTRY_NAME}

webapp-create:
	@echo "\n[ Creating Web App from Container image ]"
	az webapp create --resource-group ${RESOURCE_GROUP} \
	--plan ${RESOURCE_GROUP} --name ${APP_NAME} \
	--deployment-container-image-name ${REGISTRY_NAME}.azurecr.io/${REGISTRY_IMAGE}:${REGISTRY_TAG}

webapp-appsettings:
	@echo "\n[ Updating Web App environment variables as expected by the app code ]"
	az webapp config appsettings set --resource-group ${RESOURCE_GROUP} \
	 --name ${APP_NAME} --settings PORT=${PORT} \
	 VITE_API_HOST=${VITE_API_HOST} VITE_MODE=${VITE_MODE} 

container-permission:
	@echo "\n[ Granting the container identity permission to access the registry ]"
	az role assignment create --assignee $(shell az webapp identity assign --resource-group  ${RESOURCE_GROUP} --name ${APP_NAME} --query principalId --output tsv) \
	 --scope /subscriptions/$(shell az account show --query id --output tsv)/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.ContainerRegistry/registries/${REGISTRY_NAME} \
	 --role "AcrPull"

resource-identity:
	@echo "\n[ Configuring app to use the managed identity to pull from Azure Container Registry. ]"
	az resource update --ids /subscriptions/$(shell az account show --query id --output tsv)/resourceGroups/${RESOURCE_GROUP}/providers/Microsoft.Web/sites/${APP_NAME}/config/web \
	--set properties.acrUseManagedIdentityCreds=True

deploy:
	@echo "\n[ Using the deploy command to specify the container registry and the image for the web app ]"
	az webapp config container set --name ${APP_NAME} --resource-group ${RESOURCE_GROUP} \
	--docker-custom-image-name ${REGISTRY_NAME}.azurecr.io/${REGISTRY_IMAGE}:${REGISTRY_TAG} \
	--docker-registry-server-url https://${REGISTRY_NAME}.azurecr.io

container-settings:
	@echo "\n[ Retrieving the web app's container settings ]"
	az webapp config container show --name ${APP_NAME} --resource-group ${RESOURCE_GROUP}