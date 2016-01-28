function generateRandomPosts(numberOfPosts)
{
    $.getJSON("/posts.json", function(data) {
        var postsCount = data.length;
        var posts = data;

        var randomIndexUsed = [];
        var counter = 0;

        var divRandomPosts = $(".recommended-posts-list");

        while (counter < numberOfPosts)
        {
            var randomIndex = Math.floor(Math.random() * postsCount);

            if (randomIndexUsed.indexOf(randomIndex) == "-1")
            {
                var postLink = posts[randomIndex].url;
                var postTitle = posts[randomIndex].title;

                divRandomPosts.append('<li><a href="' + postLink + '">' + postTitle + '</a></li>');

                randomIndexUsed.push(randomIndex);

                counter++;
            }
        }
    });
}

$(document).ready(function() {
    generateRandomPosts(3);

    if($('#search-input').length > 0){
      SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/posts.json',
        searchResultTemplate: '<li><h4><a href="{url}">{title}</a></h4><p>{excerpt}</p></li>'
      });
    }
});
