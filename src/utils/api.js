export const fetchCollection = axios
  .post("/collection", {
    tokenAddress,
    tokenId,
    contractAddress,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
