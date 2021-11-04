json.extract! business, 
    :id, 
    :name, 
    :category, 
    :address, 
    :city, 
    :state, 
    :zip_code, 
    :phone_number, 
    :lat, 
    :long, 
    :website
json.photoUrls business.photos.map { |photo| url_for(photo) }