# TS-Express-Api

## Technologies that I used

- ExpressJS
- Typescript
- MongoDB

## What I learned
```ts
const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())

app.use("/api/clothes" , clothesRoutes)
app.use("/api/electronics", electronicsRoutes)

export default app;
```


## Author

- Website - [Nicolas_Bouffanais](https://nicolas-bouffanais.vercel.app/src/index.html)
- Twitter - [@N_Bouffanais](https://twitter.com/N_Bouffanais)