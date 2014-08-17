get '/dynamic/new' do
  erb :"sequences/dynamic_seq"
end

get '/sequence_specs' do
  seq = Sequence.prep_template
  prepper = SequenceJsonPrep.new(seq)
  prepper.jsonify
end

get '/sequence_specs/:id' do
  seq = Sequence.find(params[:id])
  prepper = SequenceJsonPrep.new(seq)
  prepper.jsonify
end


# name:
