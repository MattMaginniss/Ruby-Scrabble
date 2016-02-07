var search_data = {"index":{"searchIndex":["tilebag","tilegroup","whenconvertingtilegrouptostring","whendrawingtiles","whengettingpoints","whenscoringwords","word","append()","draw_tile()","empty?()","get_tiles()","new()","new()","new()","point_for()","remove()","score()","setup()","setup()","setup()","test_confirm_point_values()","test_convert_empty_group_to_string()","test_convert_multi_tile_group_to_string()","test_convert_multi_tile_group_with_repeating_values_to_string()","test_convert_single_tile_group_to_string()","test_empty_word_should_have_score_of_zero()","test_has_proper_number_of_tiles()","test_has_proper_tile_distribution()","test_score_a_one_tile_word()","test_score_a_word_with_multiple_different_tiles()","test_score_a_word_with_recurring_tiles()","to_s()","gemfile","gemfile.lock","rakefile"],"longSearchIndex":["tilebag","tilegroup","whenconvertingtilegrouptostring","whendrawingtiles","whengettingpoints","whenscoringwords","word","tilegroup#append()","tilebag#draw_tile()","tilebag#empty?()","tilegroup#get_tiles()","tilebag::new()","tilegroup::new()","word::new()","tilebag::point_for()","tilegroup#remove()","word#score()","whenconvertingtilegrouptostring#setup()","whendrawingtiles#setup()","whenscoringwords#setup()","whengettingpoints#test_confirm_point_values()","whenconvertingtilegrouptostring#test_convert_empty_group_to_string()","whenconvertingtilegrouptostring#test_convert_multi_tile_group_to_string()","whenconvertingtilegrouptostring#test_convert_multi_tile_group_with_repeating_values_to_string()","whenconvertingtilegrouptostring#test_convert_single_tile_group_to_string()","whenscoringwords#test_empty_word_should_have_score_of_zero()","whendrawingtiles#test_has_proper_number_of_tiles()","whendrawingtiles#test_has_proper_tile_distribution()","whenscoringwords#test_score_a_one_tile_word()","whenscoringwords#test_score_a_word_with_multiple_different_tiles()","whenscoringwords#test_score_a_word_with_recurring_tiles()","tilegroup#to_s()","","",""],"info":[["TileBag","","TileBag.html","","<p>Class that represents a bag of letter tiles for Scrabble\n"],["TileGroup","","TileGroup.html","","<p>Class that represents a group of letter tiles for Scrabble\n"],["WhenConvertingTileGroupToString","","WhenConvertingTileGroupToString.html","","<p>Test class for the TileGroup&#39;s ToString Method\n"],["WhenDrawingTiles","","WhenDrawingTiles.html","","<p>Test class for the Tile Bag&#39;s DrawTile method.\n"],["WhenGettingPoints","","WhenGettingPoints.html","","<p>Test class for the TileBag&#39;s points for method.\n"],["WhenScoringWords","","WhenScoringWords.html","","<p>Test class for the Word&#39;s score method\n"],["Word","","Word.html","","<p>Class that represents a group of letters that form a word\n"],["append","TileGroup","TileGroup.html#method-i-append","(tile)","<p>This will append a tile to the array only if it is input as a symbol\n"],["draw_tile","TileBag","TileBag.html#method-i-draw_tile","()","<p>This will shuffle the array of tiles, remove and return  the tile on the\nend of the shuffled array.\n"],["empty?","TileBag","TileBag.html#method-i-empty-3F","()","<p>This method returns whether the bag is out of tiles.\n"],["get_tiles","TileGroup","TileGroup.html#method-i-get_tiles","()","<p>This will get all the tiles array and return it\n"],["new","TileBag","TileBag.html#method-c-new","()","<p>This method initializes an object of the type TileBag\n"],["new","TileGroup","TileGroup.html#method-c-new","()","<p>This method initializes an object of the type TileGroup\n"],["new","Word","Word.html#method-c-new","()","<p>This initializes an object with the type Word\n"],["point_for","TileBag","TileBag.html#method-c-point_for","(tile)","<p>Class function to get the value for the input tile.\n"],["remove","TileGroup","TileGroup.html#method-i-remove","(tile)","<p>This will find the first instance of the input symbol, remove it from the\narray and return the modified …\n"],["score","Word","Word.html#method-i-score","()","<p>This will calculate and return the point value/score of the letters\ncontained in the word\n"],["setup","WhenConvertingTileGroupToString","WhenConvertingTileGroupToString.html#method-i-setup","()","<p>This method sets up the test class\n"],["setup","WhenDrawingTiles","WhenDrawingTiles.html#method-i-setup","()","<p>This method sets up the test class\n"],["setup","WhenScoringWords","WhenScoringWords.html#method-i-setup","()","<p>This method sets up the test class\n"],["test_confirm_point_values","WhenGettingPoints","WhenGettingPoints.html#method-i-test_confirm_point_values","()","<p>This tests if you will get the correct value for the 26 different tiles.\n"],["test_convert_empty_group_to_string","WhenConvertingTileGroupToString","WhenConvertingTileGroupToString.html#method-i-test_convert_empty_group_to_string","()","<p>This tests if you will get an empty string when the tile group has no tiles\nin it\n"],["test_convert_multi_tile_group_to_string","WhenConvertingTileGroupToString","WhenConvertingTileGroupToString.html#method-i-test_convert_multi_tile_group_to_string","()","<p>This tests to see if a tile group with multiple tiles in it will return all\nthe tiles correctly in a …\n"],["test_convert_multi_tile_group_with_repeating_values_to_string","WhenConvertingTileGroupToString","WhenConvertingTileGroupToString.html#method-i-test_convert_multi_tile_group_with_repeating_values_to_string","()","<p>this tests the to_s method to see if it correctly outputs a string with all\nthe tiles even if some are …\n"],["test_convert_single_tile_group_to_string","WhenConvertingTileGroupToString","WhenConvertingTileGroupToString.html#method-i-test_convert_single_tile_group_to_string","()","<p>This tests to see if the to_s method will return a string with all the\ntiles in the tile group\n"],["test_empty_word_should_have_score_of_zero","WhenScoringWords","WhenScoringWords.html#method-i-test_empty_word_should_have_score_of_zero","()","<p>This will test to see if a word with no tiles input will return a 0 value\nfor its score\n"],["test_has_proper_number_of_tiles","WhenDrawingTiles","WhenDrawingTiles.html#method-i-test_has_proper_number_of_tiles","()","<p>This tests that there can be exactly 98 tiles drawn and at the end the bag\nwill be empty. Through each …\n"],["test_has_proper_tile_distribution","WhenDrawingTiles","WhenDrawingTiles.html#method-i-test_has_proper_tile_distribution","()","<p>This tests to see the tiles in the bag are distributed as specified by\nscrabble rules.\n"],["test_score_a_one_tile_word","WhenScoringWords","WhenScoringWords.html#method-i-test_score_a_one_tile_word","()","<p>This will test to see if a word with one tile in it will return a value\nequivalent to the value of that …\n"],["test_score_a_word_with_multiple_different_tiles","WhenScoringWords","WhenScoringWords.html#method-i-test_score_a_word_with_multiple_different_tiles","()","<p>This will test to see if a word with multiple tiles in it will return a\nvalue equivalent to the sum of …\n"],["test_score_a_word_with_recurring_tiles","WhenScoringWords","WhenScoringWords.html#method-i-test_score_a_word_with_recurring_tiles","()","<p>This will test to see if a word with multiple tiles in it will return a\nvalue equivalent to the sum of …\n"],["to_s","TileGroup","TileGroup.html#method-i-to_s","()","<p>This will return a string that has all the values of the tiles array\nseparated by commas\n"],["Gemfile","","Gemfile.html","","<p>source “rubygems.org” gem &#39;spellchecker&#39;\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GEM\n\n<pre>remote: https://rubygems.org/\nspecs:\n  spellchecker (0.1.5)</pre>\n<p>PLATFORMS\n"],["Rakefile","","Rakefile.html","","<p>require &#39;rake/testtask&#39;\n<p>Rake::TestTask.new do |t|\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">t</span>.<span class=\"ruby-identifier\">pattern</span> = <span class=\"ruby-string\">&quot;tests/when_*.rb&quot;</span>\n</pre>\n"]]}}