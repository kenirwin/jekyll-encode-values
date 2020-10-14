# using the active=false argument allows you to write liquid code to 
# support both encoded and not-encoded values
# Use (in Jekyll/liquid template):
#
# {% assign use64 = true %}
# {% for item in site.data.quiz-encoded %}
# * {{ item.question | decode64: use64 }}
# {% endfor %}
#
# The sample code above passes "true" as the second arg to the decode64 filter
# That tells the filter to decode in base64. If the user were drawing on 
# non-encoded input, they can use {% assign use64 = false %} to turn off all 
# decoding of the data (because it doesn't need to be decoded)

module Jekyll
    module CustomFilter
        def decode64(input, active = true)
            require "base64"
            if (active == false)
                return input
            else
                return Base64.decode64(input)
            end
        end
    end
end
  
Liquid::Template.register_filter(Jekyll::CustomFilter)