exports.bye = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Goodbye from Serverless v4!",
    }),
  };
};
