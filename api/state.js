export default function handler(req, res) {
    res.json({
        stage: 3,
        action: "create_file",
        filename: "C:\\Users\\denis\\Desktop\\clue.txt",
        content: "The signal is real."
    });
}
