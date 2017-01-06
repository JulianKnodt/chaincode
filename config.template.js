module.exports = {
    network:{
        peers:   [{
            "api_host": "xxx.xxx.xxx.xxx",
            "api_port": xxx,
            "api_port_tls": xxx,
            "id": "xxxxxx-xxxx-xxx-xxx-xxxxxxxxxxxx_vpx"
        }],
        users:  [{
            "enrollId": "user1",
            "enrollSecret": "xxxxxxxx"
        }],
        options: {							//this is optional 
            quiet: true, 
            timeout: 60000
        }
    },
    chaincode:{
        zip_url: 'https://github.com/ibm-blockchain/marbles-chaincode/archive/master.zip',
        unzip_dir: 'marbles-chaincode-master/part2_v1.0.0',
        git_url: 'https://github.com/ibm-blockchain/marbles-chaincode/part2_v1.0.0'
    }
};