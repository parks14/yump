class Api::BusinessesController < ApplicationControlller
    def index
        @businesses = Business.all
    end

    def show
        @business = Business.find_by(id: params[:id])
    end
end