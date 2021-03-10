// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.12;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    string name;

    function store(string memory _name) public {
        name = _name;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (string memory){
        return name;
    }
}