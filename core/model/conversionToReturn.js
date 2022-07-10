const conversionReturn = {
    feed_To_return(feed){
        let feedReturn = {
            title: feed.title,
            body: feed.body,
            image: feed.image,
            imageLink: feed.imageLink,
            source: feed.source,
            publisher: feed.publisher,
            writer: feed.writer,
            origin: feed.origin
        };
        return feedReturn;
    }
};

module.exports = conversionReturn;