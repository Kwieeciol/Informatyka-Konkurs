values = ARGV.map(&:to_i)

if values.length != 3
    abort("Proszę wpisać odpowiednią ilość parametrów")
end

N, T, A = values
time = []

(0...A * 10).step(T).each do |x|
    time << x.to_f / 10
end

time = time[...N]
amplitude = []

time.each do |x|
    amplitude << Math.sin(x)
end

amplitude.each do |amp|
    v = (A - (A * amp)).round()
    puts " " * v + "."
end