class HomeController < ApplicationController
  def index
    @review_requests = ReviewRequest.order("created_at DESC").to_a.uniq { |s| s.user_id }.first(8)

    @reviewers = User.all.to_a.shuffle.first(8)
  end
end
