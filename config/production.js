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
        token: '5648443731:AAErZm05WqK-gbtMMw3z_wfnZ2YVncCaUwY',
        chatIds: [-1001677121379]
    }
};
