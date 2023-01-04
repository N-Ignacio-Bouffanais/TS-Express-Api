# TS-Express-Api
- This project is a Rest API with Typescript, Mongodb and Express.js, with authentication and authorization. And I will combine this project with Vue Js to have a complete eCommerce website.

## Technologies that I used

- ExpressJS
- Typescript
- MongoDB
- JSON Web Token

## What I learned
```ts
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(JWTStrategy);

//routes
app.get("/", (req, res) => {
  return res.send(`The API is at http://localhost:${app.get("port")}`);
});
app.use("/api/clothes" , clothesRoutes)
app.use("/api/electronics", electronicsRoutes)
app.use("/api/auth", authRoutes)

export default app;
```


## Author

- Website - [Nicolas_Bouffanais](https://nicolas-bouffanais.vercel.app/src/index.html)
- Twitter - [@N_Bouffanais](https://twitter.com/N_Bouffanais)