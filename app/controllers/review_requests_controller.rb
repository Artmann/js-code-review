class ReviewRequestsController < ApplicationController
  def new
  end

  def show
    @review_request = ReviewRequest.find(params[:id])
    @title = @review_request.title
  end
end