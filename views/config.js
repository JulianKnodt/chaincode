module.exports = {
    network:{
        peers:   [{
            "api_host": "fbcf42a873ea4495bd4e42b7860575f3-vp0.us.blockchain.ibm.com",
            "api_port": 5002,
            "api_port_tls": 5002,
            "id": 'fbcf42a873ea4495bd4e42b7860575f3'
        }],
        users:  [{"enrollId":"admin","enrollSecret":"5934d168a8","affiliation":"group1","username":"admin","secret":"5934d168a8"},{"enrollId":"WebAppAdmin","enrollSecret":"a1137a601e","affiliation":"group1","username":"WebAppAdmin","secret":"a1137a601e"},{"enrollId":"user_type1_0","enrollSecret":"0e32346725","affiliation":"group1","username":"user_type1_0","secret":"0e32346725"},{"enrollId":"user_type1_1","enrollSecret":"973fae37b6","affiliation":"group1","username":"user_type1_1","secret":"973fae37b6"},{"enrollId":"user_type1_2","enrollSecret":"eb6f320e6f","affiliation":"group1","username":"user_type1_2","secret":"eb6f320e6f"},{"enrollId":"user_type1_3","enrollSecret":"c3852b4bc8","affiliation":"group1","username":"user_type1_3","secret":"c3852b4bc8"},{"enrollId":"user_type1_4","enrollSecret":"bb21d7fa44","affiliation":"group1","username":"user_type1_4","secret":"bb21d7fa44"},{"enrollId":"user_type2_0","enrollSecret":"18b2af49d6","affiliation":"group1","username":"user_type2_0","secret":"18b2af49d6"},{"enrollId":"user_type2_1","enrollSecret":"014b011851","affiliation":"group1","username":"user_type2_1","secret":"014b011851"},{"enrollId":"user_type2_2","enrollSecret":"6ff9ea31be","affiliation":"group1","username":"user_type2_2","secret":"6ff9ea31be"},{"enrollId":"user_type2_3","enrollSecret":"7530843af8","affiliation":"group1","username":"user_type2_3","secret":"7530843af8"},{"enrollId":"user_type2_4","enrollSecret":"976fc4223f","affiliation":"group1","username":"user_type2_4","secret":"976fc4223f"},{"enrollId":"user_type4_0","enrollSecret":"8780b5370d","affiliation":"group1","username":"user_type4_0","secret":"8780b5370d"},{"enrollId":"user_type4_1","enrollSecret":"db48ade4ab","affiliation":"group1","username":"user_type4_1","secret":"db48ade4ab"},{"enrollId":"user_type4_2","enrollSecret":"0a672eab69","affiliation":"group1","username":"user_type4_2","secret":"0a672eab69"},{"enrollId":"user_type4_3","enrollSecret":"49edefee4a","affiliation":"group1","username":"user_type4_3","secret":"49edefee4a"},{"enrollId":"user_type4_4","enrollSecret":"c66afda75e","affiliation":"group1","username":"user_type4_4","secret":"c66afda75e"},{"enrollId":"user_type8_0","enrollSecret":"8c3dd98d5a","affiliation":"group1","username":"user_type8_0","secret":"8c3dd98d5a"},{"enrollId":"user_type8_1","enrollSecret":"a374e1f3d6","affiliation":"group1","username":"user_type8_1","secret":"a374e1f3d6"},{"enrollId":"user_type8_2","enrollSecret":"c18b9ba6cb","affiliation":"group1","username":"user_type8_2","secret":"c18b9ba6cb"},{"enrollId":"user_type8_3","enrollSecret":"9f1fe5bf97","affiliation":"group1","username":"user_type8_3","secret":"9f1fe5bf97"},{"enrollId":"user_type8_4","enrollSecret":"41fe43c7cb","affiliation":"group1","username":"user_type8_4","secret":"41fe43c7cb"}],
        options: {                          //this is optional 
            quiet: true, 
            timeout: 60000
        }
    },
    chaincode:{
        zip_url: 'https://github.com/ibm-blockchain/marbles/archive/v2.0.zip',
        unzip_dir: 'marbles-2.0/chaincode',
        git_url: 'http://gopkg.in/ibm-blockchain/marbles.v2/chaincode',
        deployed_name: 'gen'
    }
};