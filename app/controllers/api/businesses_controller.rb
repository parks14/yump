class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.find_by(id: params[:id])
        render :show
    end

    private

    def business_params
        params.require(:business).permit(:name, :category, :address, :city, :state, :zip_code, :phone_number, :lat, :long, photos: [])
    end
    
end