$randrange = Proc.new { |s, e| rand(s..e) }
$uniform = Proc.new { |s, e| rand(s.to_f..e.to_f) }


class ExponentialBackoff
  def initialize(base=1, integral: false)
    @_base = base
    
    @_exp = 0
    @_max = 10
    @_reset_time = base * 2 ** 11
    @_last_invocation = Process.clock_gettime(Process::CLOCK_MONOTONIC)

    if integral
      @_randfunc = $randrange
    else
      @_randfunc = $uniform
    end
  end

  def delay()
    invocation = Process.clock_gettime(Process::CLOCK_MONOTONIC)
    interval = invocation - @_last_invocation
    @_last_invocation = invocation

    if interval > @_reset_time
        @_exp = 0
    end

    @_exp = [@_exp + 1, @_max].min
    return @_randfunc.call(0, @_base * 2 ** @_exp)
  end
end

backoff = ExponentialBackoff.new(integral: true)

10.times do |i|
  puts backoff.delay
end
