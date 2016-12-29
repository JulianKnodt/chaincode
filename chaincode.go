package main

import (
	"errors"
	"fmt"

	"github.com/hyperledger/fabric/core/chaincode/shim"
)

type chaincode struct {
}

numberArgsError := "Incorrect # of arguments: expecting ";

func main() {
	err := shim.Start(new(chaincode))
	if err != nil {
		fmt.Printf("Error starting chaincode: %s", err)
	}
}

func (t *chaincode) Init(stub shim.ChaincodeStubInterface, function string, args string[]) ([]byte, error) {
	if (len args != 1) {
		return nil, errors.New(numberArgsError + "1");
	}
	//Put any initialization here.
	err := stub.putState("Initialization", []byte(args[0]));
	if err != nil {
		return nil, err;
	}
	return nil, nil;
}

func (t *chaincode) Invoke(stub shim.ChaincodeStubInterface, function string, args string[]) ([]byte, error) {
	if (len args != 2) {
		return nil, errors.New(numberArgsError + "2")
	}
}