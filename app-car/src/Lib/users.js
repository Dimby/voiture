export const userList = async () => {
    let dataUsers = await new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  
    return dataUsers;
  };
  