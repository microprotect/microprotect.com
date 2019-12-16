const locales = {
    'en': {
        'description1': 'Insurance must be served for all.',
        'description2': 'We want more people to get insurance benefit.',
        'subscribe1': 'Please participate to the insurance donation,\nstarting January 1, 2020.',
        'subscribe2': 'We will send news and information.',
        'address': 'G406, HEYGROUND,\n5, Ttukseom-ro 1na-gil,\nSeongdong-gu, Seoul,\nRepublic of Korea',
    },
    'ko': {
        'description1': '보험은 우리 모두의 것이어야 합니다.',
        'description2': '더 많은 분들에게 보험 혜택을 제공하고자 합니다.',
        'subscribe1': '2020년 1월 1일부터 시작하는 보험 기부에 동참해주세요',
        'subscribe2': '이메일을 남겨주시면 소식을 전해 드리겠습니다.',
        'address': '서울특별시 성동구 뚝섬로1나길 5\n헤이그라운드 성수시작점 G406',
    }
};

let currentLocale = new Map([...new URLSearchParams(location.search)]).get('locale')
    || (navigator.language || 'ko').slice(0, 2);
let t = locales[currentLocale];

function getLocale() {
    return currentLocale;
}

export {
    t,
    getLocale,
}
