export default function handler(req, res) {
    const action = req.query.action;

    if (action === "1") {
        return res.status(200).json({
            stage: 1,
            action: "message",
            message: "The first signal was activated."
        });
    }

    if (action === "2") {
        return res.status(200).json({
            stage: 2,
            action: "create_file",
            filename: "C:\\Users\\denis\\Desktop\\clue.txt",
            content: "You found the hidden message."
        });
    }

    if (action === "3") {
        return res.status(200).json({
            stage: 3,
            action: "open_url",
            url: "https://example.com"
        });
    }

    return res.status(200).json({
        stage: 0,
        action: "none",
        message: "No action selected."
    });
}
