import Cors from "cors";

// Initializing the cors middleware,
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.json({
    userToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOWY1MTllMzQ3MGVlYmZmOWFiYzcyNDU4ZmYyODhhMTZiNDk3ZmFiMWNmYzRiZjk5NGZmMjE0YWYyNTI3NDk1YmFkNWM5YmY2NDNjYTg4OTQiLCJpYXQiOjE2NzM0MjI3MDQuNjgzMTkyLCJuYmYiOjE2NzM0MjI3MDQuNjgzMTk0LCJleHAiOjE3MDQ5NTg3MDQuNjY3MTksInN1YiI6Ijc3NjY4OCIsInNjb3BlcyI6W119.C9btBO8kQ_-576HHAKng-GD7QspLT4Yej5qX2sZY54XS1Pg10_gQyh0UjXF-wuCXzAQwWjnCKK2AfmiF_9C6hmpExEg9fUOVAc59zcB0PfOw67Fpj4mojxYnH2hq5Sxrnghh0p9fk9Dg3nJOJUZ-OHV_YEOc5HESkgvJn_IT0qCab7CkY4OLEuGiUQNL9IPIOByjMuduziyI54o3ID8ml8RmhRhm-Vr7V7WVSl_gX2Q9NZ6lNBCoJoXwDHkWsAYaaSEI0xRtWzZnSLE9GHeHCx2RWUrOtsAGG153Wca3z_pNvPR6AEJ2GK8_3URrjpcBw6IKiIhapyJNKtRJZ60KMcU6mLXbDMW-EDh0VaglTDF3_H2DkC-dxStCrii39IWbGa-YozqW0qoMfJJQSRkw6qC5F99uP5R9CqGGPjf3L4DgDYVoV2KCoDWiGmdS1k6jMi-y17wPh6SKvRMIRmy30wJuR0DTB2lJ9SAbD-zTnW_HlGTcaZ_xLBlMxBOFl9ZymIBsStCN4_ALUkDWl4Iq1Q9Zd1mK9Zkm3xiArEajLzg8DoiiaWsHUWnHeIY0Ha0_qjFrVPxZ6DRKuFDPkBlQlV_v7PCsCbbacJ6Y0kz-Dx8IWt1gsWoWlilxOQtYoSSGruWkr9iMaNMM4DVHRyXk7zCegw1wlW3Jyne-p29Gwi8",
  });
}
