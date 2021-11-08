class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def index
        @reviews = Review.all.where(business_id: params[:business_id])
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :business_id)
    end
end