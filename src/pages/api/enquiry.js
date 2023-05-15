
const handler = async (req, res) => {

  const successMessage = {
    status: "success",
    message: "Enquiry submitted successfully",
  };

  const errorMessage = {
    status: "failure",
    message: "Google ReCaptcha Failure",
  };

  if (req.method === "POST") {
    try {
      const result = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
      });

      const resData = await result.json();
      console.log(resData)
      if (resData?.score > 0.5) {
        res.status(200).json(successMessage);
      } else {
        res.status(200).json(errorMessage);
      }
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;