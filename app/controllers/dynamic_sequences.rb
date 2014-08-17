get '/dynamic/new' do
  erb :"sequences/dynamic_seq"
end

get '/sequence_specs' do
  Sequence.new
end
