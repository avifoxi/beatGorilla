get '/dynamic/new' do
  erb :"sequences/dynamic_seq"
end

get '/sequence_specs' do
  seq = Sequence.prep_template
  # seq_json = {
  #   seq
  # }.to_json
  prepper = SequenceJsonPrep.new(seq)
  prepper.to_hash.to_json
end



# name:
