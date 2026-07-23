export default function handler(req, res) {
    res.status(200).json({
        stage: 1,
        action: "message",
        message: "A connection has been established."
    });
}
