// omikuji.service.js

export const getOmikuji = async (query) => {
    try {
        const result = ["大吉", "中吉", "小吉", "凶", "大凶"];
        const min = 0;
        const max = result.length - 1;
        const index = Math.floor(Math.random() * (max - min + 1)) + min;

        let message;
        switch (index) {
            case 0: message = "おめでとうございます！";
                break;
            case 1: message = "いい日になりそう";
                break;
            case 2: message = "プラマイゼロです！";
                break;
            case 3: message = "今日は背中に気をつけましょう！";
                break;
            case 4: message = "最悪の1日になりそうですね...";
                break;

            default: message = "Error";
                break;
        }

        return { result: result[index], message: message}
        // return { result: result[index] };
    } catch (e) {
        throw Error("Error while getting Omimkuji.")  // わかっていない
    }
};