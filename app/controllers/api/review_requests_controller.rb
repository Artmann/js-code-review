class Api::ReviewRequestsController < ApplicationController
  def create
    files = (params[:files] || []).select { |f| (f['filename'] || '').size > 0 or (f['content'] || '').size > 0 }

    if params[:title].blank?
      render json: { error: 'You must supply a title.' }, status: 400
      return
    end

    if files.size == 0
      render json: { error: 'You must submit at least one file.' }, status: 400
      return
    end

    review_request = ReviewRequest.create(title: params[:title], user: current_user)

    files.each do |f|
      review_request.source_files.create(filename: f['filename'], content: f['content'], language: f['language'])
    end

    render json: {
      'review-request': review_request
    }
  end
end