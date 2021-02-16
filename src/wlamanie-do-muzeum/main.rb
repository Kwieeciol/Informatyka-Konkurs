print "Wpisz ilość obrazów: "
x = gets.chomp()

print "> "
obrazy_w_muzeum = gets.chomp().split(" ").map(&:to_i)

wszystkie_obrazy = Array(obrazy_w_muzeum.min...obrazy_w_muzeum.max)
skradzione_obrazy = wszystkie_obrazy - obrazy_w_muzeum

puts "Skradziono: #{ skradzione_obrazy.length } obrazy"