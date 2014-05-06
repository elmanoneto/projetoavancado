json.array!(@clients) do |client|
  json.extract! client, :id, :nome, :email
  json.url client_url(client, format: :json)
end
