const locales = {
    en: {
        'description1': 'Insurance must be served for all.',
        'description2': 'We want more people to get insurance benefit.',
        'subscribe1': 'Please participate to the insurance donation,\nstarting January 1, 2020.',
        'subscribe2': 'We will send news and information.',
        'address': 'G406, HEYGROUND,\n5, Ttukseom-ro 1na-gil,\nSeongdong-gu, Seoul,\nRepublic of Korea',
    },
};

function applyLocale(locale) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        element.innerText = locales[locale][key];
    });
}

const locale = new Map([...new URLSearchParams(location.search)]).get('locale')
    || (navigator.language || 'ko').slice(0, 2);

if (locale === 'en') {
    applyLocale(locale);
}

document.querySelector(`[href="?locale=${locale}"]`).className = 'active';
