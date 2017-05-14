# File where the generated user agent strings array will be
useragentstrings = File.open('user_agents.js', 'w')

# start of array
useragentstrings.write("var userAgents = [\n")

# fill the array with useragent strings
File.open('user_agents.txt', 'r') do |f|
	f.each_line do |line|
		useragentstrings.write("\t'" + line.strip + "',\n")
	end
end

# end of array
useragentstrings.write('];')