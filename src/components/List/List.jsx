import React from "react";
import Container from "./../Container/Container";
const List = ({ fetchCourses, array, MyComponent }) => {
  return (
    <>
      <Container>
        {array.map((element) => {
          return (
            <MyComponent
              fetchCourses={fetchCourses}
              key={element._id}
              {...element}
            />
          );
        })}
      </Container>
    </>
  );
};

export default List;
