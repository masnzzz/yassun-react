export const LANGUAGES = [
    'JavaScript',
    'C++',
    'PHP',
    'Go',
    'Ruby'
];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000);
    })
}
