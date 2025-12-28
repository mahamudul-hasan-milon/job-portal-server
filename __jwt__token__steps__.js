/**
 * 1. after successful login: generate a jwt token
 * npm i jsonwebtoken, cookie-parser
 * jwt.sign(payload, secret, {expiresIn: '1d'})
 *
 *
 * 2. send token (generated in the server side) to the client side
 * localStorage (less secure) ---> easier
 *
 * httpOnly cookies  ---> better
 *
 * 3. for sensitive or secure or private or protected apis: send token to the server side
 * 
 * On the server side: 
 * app.use(
   cors({
     origin: ["http://localhost:5173"],
     credentials: true,
   })
 );
 * 
 * In the client side: 
 * use axios get, post, delete, patch for secure apis and must use: {withCredentials}
 * 
 * 
 * 4. validate the token in the server side:
 * if valid: provide data
 * if not valid: logout
 * 
 * 5. check right user accessing his/her own data based on permission
 *
 */

/**
 *
 * Generate secret .env (process.env.ACCESS_TOKEN_SECRET)
 * ----------------In the terminal -----------
 * 1. node
 * 2. require('crypto').randomBytes(64)
 * 3. require('crypto').randomBytes(64).toString('hex')
 *
 */

/**
 *
 * ------------------------------------
 *             JWT
 * ------------------------------------
 * 1. Install jsonwebtoken cookie-parser
 * 2. set cookieParser as middleware
 *
 * 3.
 * i. create a token
 *
 * jwt.sign(data, secret, {expiresIn: '5h'})
 *
 * set token to the cookie of res.cookie('token', token, {
 * httpOnly: true,
 * secure:L false
 * }).send({})
 *
 * cors({
 *  origin: [''],
 *    credentials: true
 * })
 *
 * client side: {
 *  withCredentials: true
 * }
 *
 * ii. send the token to the client side. make sure token is in the cookies (application)
 *
 * iii.
 *
 */
