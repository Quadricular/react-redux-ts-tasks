import React from 'react';
export default function Tasks() {
  React.useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);
  return <div>Tasks Home</div>;
}
