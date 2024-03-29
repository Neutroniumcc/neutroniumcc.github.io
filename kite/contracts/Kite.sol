// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "hardhat/console.sol";

contract Kite is ERC721URIStorage, ERC2981 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 likingPrice = 0.01 ether;
    address payable owner;
    address payable creator;
    address payable contractOwner;

    mapping(uint256 => MarketItem) private idToMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable creator;
        address payable owner;
        uint256 price;
        uint256 likes;
        uint256 dislikes;
        bool selling;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address creator,
        address owner,
        uint256 price,
        uint256 likes,
        uint256 dislikes,
        bool selling
    );

    constructor() ERC721("Kite", "KITE") {
        contractOwner = payable(msg.sender);
        _setDefaultRoyalty(msg.sender, 500);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal virtual override {
        super._burn(tokenId);
        _resetTokenRoyalty(tokenId);
    }

    function burnNFT(uint256 tokenId) public {
        _burn(tokenId);
    }





    /* Mints a nft token */
    function createToken(
        string memory tokenURI
    ) public payable returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

         idToMarketItem[newTokenId] = MarketItem(
            newTokenId,
            payable(msg.sender),
            payable(msg.sender),
            0,
            0,
            0,
            false
        );
        return newTokenId;
    }


    /* list the nft token to marketplace*/
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei");
        require(
                idToMarketItem[tokenId].owner == msg.sender,
                "Only item owner can perform this operation"
            );
        idToMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(msg.sender),
            price,
            0,
            0,
            true
        );

        _transfer(msg.sender, address(this), tokenId);
        emit MarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            0,
            0,
            true
        );
    }

    /* Updates the listing price of a token */
    function updateListingPrice(uint256 tokenId, uint256 _listingPrice) public payable {
        require(
            owner == msg.sender,
            "Only nft owner can update listing price."
        );
        
        idToMarketItem[tokenId].price = _listingPrice;
    }


    /* Returns the listing price of a token */
    function getListingPrice(uint256 tokenId) public view returns (uint256) {
        return idToMarketItem[tokenId].price;
    }


    function likeNft(uint256 tokenId) public payable {
          require(
            msg.value == likingPrice,
            "Price must be equal to liking price"
        );
        idToMarketItem[tokenId].likes += 1;
        payable(idToMarketItem[tokenId].owner).transfer(likingPrice);
    }

    function dislikeNft(uint256 tokenId) public payable {
          require(
            msg.value == likingPrice,
            "Price must be equal to liking price"
        );
        idToMarketItem[tokenId].dislikes += 1;
        payable(address(this)).transfer(likingPrice);
    }

    function getNftLikes (uint256 tokenId) public view returns (uint256) {
         return idToMarketItem[tokenId].likes;
    }

    function getNftDislikes (uint256 tokenId) public view returns (uint256) {
         return idToMarketItem[tokenId].dislikes;
    }

    /* allows someone to resell a token they have purchased */
    function resellToken(uint256 tokenId, uint256 price) public payable {
        require(
            idToMarketItem[tokenId].owner == msg.sender,
            "Only item owner can perform this operation"
        );
        require(
            msg.value == idToMarketItem[tokenId].price,
            "Price must be equal to listing price"
        );
        idToMarketItem[tokenId].selling = false;
        idToMarketItem[tokenId].price = price;
        idToMarketItem[tokenId].creator = payable(msg.sender);
        idToMarketItem[tokenId].owner = payable(address(this));
        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    /* Transfers ownership of the item, as well as funds between parties */
    function executeSale(uint256 tokenId) public payable {
        uint256 price = idToMarketItem[tokenId].price;
        address seller = idToMarketItem[tokenId].owner;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );
        idToMarketItem[tokenId].owner = payable(msg.sender);
        idToMarketItem[tokenId].selling = false;
        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);
        payable(seller).transfer(msg.value);
    }

    /* Returns all selling items */
    function fetchSellingNfts() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

        /* Returns the Nft by Id */
    function fetchNftById(uint256 tokenId) public view returns (MarketItem memory) {
        return idToMarketItem[tokenId];
    }


        /* Returns all created items */
    function fetchAllNfts() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
        }
        return items;
    }

    /* Returns only items that a user has owned */
    function fetchUserOwnedNfts(address userAddress) public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == userAddress) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == userAddress) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has created */
    function fetchUserCreatedNfts(address userAddress) public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].creator == userAddress) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].creator == userAddress) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }


}