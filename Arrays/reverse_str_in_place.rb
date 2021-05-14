def reverse(str)
    p1 = 0
    p2 = str.length - 1

    while p1 <= p2

        str[p1], str[p2] = \
        str[p2], str[p1]
        
        p1 += 1
        p2 -= 1
    end
end 