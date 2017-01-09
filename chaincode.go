package main

import (
	"errors"
	"fmt"

	"github.com/hyperledger/fabric/tree/master/core/chaincode/shim"
)

type chaincode struct {
	
}

numberArgsError := "Incorrect # of arguments: expecting ";

var Functions = map[string]func(shim.ChaincodeStubInterface,[]string)([]byte, error) {
	"set_user_amount": set_user_amount
}


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
	err := stub.PutState("Initialization", []byte(args[0]));
	if err != nil {
		return nil, err;
	}
	return nil, nil;
}

func (t *chaincode) Invoke(stub shim.ChaincodeStubInterface, function string, args string[]) ([]byte, error) {
	if (len args != 2) {
		return nil, errors.New(numberArgsError + "2")
	}
	if (function == 'init') {
		return t.Init(stub, 'Init', args);
	} else if (function == 'set_user_amount') {
		// return t.write
		//will write the right write function later
	}
	fmt.Println("query did not find func: " + function)

	return nil, errors.New("Received unknown function query: " + function)
}

func (t *chaincode) Query(stub shim.ChaincodeStubInterface, function string, args string[]) ([]byte, error) {
	if (function == 'read') {
		return t.get_user_amount(stub, args);
	}
}

func (t *chaincode) set_user_amount(stub shim.ChaincodeStubInterface, args string[]) ([]byte, error) {
	var userID = args[0];
	var amount = args[1];
	err := stub.PutState(userID, []byte(amount));
	if err != nil {
		return nil, err;
	}
	return nil, nil;
}

func (t *chaincode) get_user_amount(stub shim.ChaincodeStubInterface, args string[]) ([]byte, error) {
	key = args[0];
	valAsbytes, err := stub.GetState(key);
	if err != nil {
		jsonResp = "{\"Error\":\"Failed to get state for " + key + "\"}"
		return nil, errors.New(jsonResp)
	}

	return valAsbytes, nil
}
