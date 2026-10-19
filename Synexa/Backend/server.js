const express = require("express")
const cors = require("cors")
require("dotenv").config();

const transporter = require("./Middleware/email")

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("surver is running")
})

app.post("/send-email", async (req, res) => {
  try {
    const { fullName, email, phone, service, project } = req.body;

   const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `New Business Inquiry from - ${fullName}`,
  html: `
    <h2>Business Inquiry from</h2>

    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Project:</strong> ${project}</p>
  `,
};


    const info = await transporter.sendMail(mailOptions);

    //  console.log(info);


    res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
    });

  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
        success: false,
        message: error.message,
    });
}
});

app.listen(3000,(req,res)=>{
    console.log("server is running on http://localhost:3000");
    
})