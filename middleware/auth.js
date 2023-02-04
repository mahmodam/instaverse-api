const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;

// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   // Get token from header
//   const token = req.header("x-auth-token");
//   // Check if not token
//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }
//   // Verify token
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = decoded.user;

//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };

// module.exports = auth;
