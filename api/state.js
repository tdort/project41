export default function handler(req, res) {
    res.status(200).json({
        stage: 0,
        action: "none",
        message: "No events yet."
    });
}
