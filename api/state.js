export default function handler(req, res) {
    res.status(200).json({
        stage: 2,
        action: "message",
        message: "The second signal has arrived."
    });
}
