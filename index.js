const quiz = [
    {
        question: '今回のアフリカ座マルチアングルLIVE配信専用演劇は何回目？',
        answer: [
            '1',
            '5',
            '8',
            '10',
        ],
        correct: '10'
    },{
        question: '今回のタイトルは？',
        answer: [
            '刑事',
            'KEIJI',
            '掲示',
            'KG',
        ],
        correct: 'KEIJI'
    },{
        question: '観れる場所は？',
        answer: [
            '劇場',
            '映画館',
            '好きな場所',
            '電波のない洞窟',
        ],
        correct: '好きな場所'
    }

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    const buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
        window.alert('『KEIJI』9/29～10/3　ActLive お楽しみに！！');
        
    }

};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
const buttonLength = $button.length;
while (handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handleIndex++;
}
