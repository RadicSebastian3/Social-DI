export const api = {
    getUserAvatar: async () => {
        let req = await fetch('https://dog.ceo/api/breeds/image/random');
        let json = await req.json();
        return json
    },
}