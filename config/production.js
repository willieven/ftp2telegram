module.exports = {
    ftp: {
        url: 'ftp://0.0.0.0:21',
        pasv: {
            ip: '192.168.1.2',
            portMin: 21000,
            portMax: 21010,
        },
        credentials: {
            'hikvision': 'Password123'
        }
    },

    telegram: {
        token: '5259799222:AAFJHt49XKeu8DsyPsqZyruw6ZbcDF17Cb0',
        chatIds: [-1337]
    }
};
