print "> "
n = gets.chomp().to_i
odpowiedzi = []

def mozna_stworzyc(literki, slowo)
    lst = []
    slowo.each_char do |l|
        if literki.include? l.upcase()
            i = literki.index(l.upcase())
            literki.slice!(i)
            lst << true
        else
            lst << false
        end
    end
    return lst.all? { |elem| elem }
end

n.times do |i|
    odp = []
    print "Wpisz x oraz y: "
    x, y = gets.chomp().split(" ")
    
    print "Wpisz zbiór liter: "
    zbior = gets.chomp().split(" ")

    y.to_i.times do |j|
        print "Wpisz slowo nr. #{ j + 1 }: "
        slowo = gets.chomp()
        mozna = mozna_stworzyc(zbior.clone, slowo)

        if mozna
            odp << "TAK"
        else
            odp << "NIE"
        end
    end
    odpowiedzi << odp
    puts
end

odpowiedzi.each do |odp|
    odp.each do |x|
        puts x
    end
    puts 
end