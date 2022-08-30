import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { PlayDataComponent } from './play-data/play-data.component';
import { MusicComponent } from './play-data/music/music.component';
import { PlayerComponent } from './play-data/player/player.component';
import { GateComponent } from './play-data/gate/gate.component';
import { HistoryComponent } from './play-data/history/history.component';
import { RatingComponent } from './play-data/rating/rating.component';
import { PresetComponent } from './collection/title/preset/preset.component';
import { CollectionComponent } from './collection/collection.component';
import { SpecialComponent } from './collection/title/special/special.component';
import { CustomComponent } from './collection/title/custom/custom.component';
import { IconComponent } from './collection/icon/icon.component';
import { PlateComponent } from './collection/plate/plate.component';
import { NaviCharacterComponent } from './collection/navi-character/navi-character.component';
import { TrophyComponent } from './collection/trophy/trophy.component';
import { StageupComponent } from './stageup/stageup.component';
import { StageupDetailComponent } from './stageup/stageup-detail/stageup-detail.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { FriendComponent } from './friend/friend.component';
import { FriendVisibilityComponent } from './friend/friend-visibility/friend-visibility.component';
import { FriendFindComponent } from './friend/friend-find/friend-find.component';
import { FriendPlayerComponent } from './friend/friend-player/friend-player.component';
import { FriendApplyingComponent } from './friend/request/friend-applying/friend-applying.component';
import { FriendAcceptingComponent } from './friend/request/friend-accepting/friend-accepting.component';
import { RankingComponent } from './ranking/ranking.component';
import { MusicHighScoreComponent } from './ranking/music-high-score/music-high-score.component';
import { MusicHighScoreDetailComponent } from './ranking/music-high-score-detail/music-high-score-detail.component';
import { TotalHighScoreDetailComponent } from './ranking/total-high-score-detail/total-high-score-detail.component';
import { StageupScoreComponent } from './ranking/stageup-score/stageup-score.component';
import { StageupScoreDetailComponent } from './ranking/stageup-score-detail/stageup-score-detail.component';
import { WpScoreDetailComponent } from './ranking/wp-score-detail/wp-score-detail.component';
import { OptionTopComponent } from './option/option-top/option-top.component';
import { OptionPlayerNameComponent } from './option/option-player-name/option-player-name.component';
import { OptionGameSettingComponent } from './option/option-game-setting/option-game-setting.component';
import { OptionNoteSpeedComponent } from './option/option-game-setting/option-note-speed/option-note-speed.component';
import { OptionJudgeLineTimingComponent } from './option/option-game-setting/option-judge-line-timing/option-judge-line-timing.component';
import { OptionMaskComponent } from './option/option-game-setting/option-mask/option-mask.component';
import { OptionMovieComponent } from './option/option-game-setting/option-movie/option-movie.component';
import { OptionBonusNoteEffectComponent } from './option/option-game-setting/option-bonus-note-effect/option-bonus-note-effect.component';
import { OptionMirrorComponent } from './option/option-game-setting/option-mirror/option-mirror.component';
import { OptionGiveupComponent } from './option/option-game-setting/option-giveup/option-giveup.component';
import { OptionDisplaySettingComponent } from './option/option-display-setting/option-display-setting.component';
import { OptionJudgePositionComponent } from './option/option-display-setting/option-judge-position/option-judge-position.component';
import { OptionJudgeDetailComponent } from './option/option-display-setting/option-judge-detail/option-judge-detail.component';
import { OptionInformationMaskComponent } from './option/option-display-setting/option-information-mask/option-information-mask.component';
import { OptionGuideLineIntervalComponent } from './option/option-display-setting/option-guide-line-interval/option-guide-line-interval.component';
import { OptionGuideMeasureLineComponent } from './option/option-display-setting/option-guide-measure-line/option-guide-measure-line.component';
import { OptionCenterDisplayComponent } from './option/option-display-setting/option-center-display/option-center-display.component';
import { OptionScoreDisplayComponent } from './option/option-display-setting/option-score-display/option-score-display.component';
import { OptionMultiRankDisplayComponent } from './option/option-display-setting/option-multi-rank-display/option-multi-rank-display.component';
import { OptionEmblemDisplayComponent } from './option/option-display-setting/option-emblem-display/option-emblem-display.component';
import { OptionRateDisplayComponent } from './option/option-display-setting/option-rate-display/option-rate-display.component';
import { OptionPlayerLevelDisplayComponent } from './option/option-display-setting/option-player-level-display/option-player-level-display.component';
import { OptionGateDirectingSkipComponent } from './option/option-display-setting/option-gate-directing-skip/option-gate-directing-skip.component';
import { OptionMissionDirectingSkipComponent } from './option/option-display-setting/option-mission-directing-skip/option-mission-directing-skip.component';
import { OptionGuideLineMaskComponent } from './option/option-display-setting/option-guide-line-mask/option-guide-line-mask.component';
import { OptionDesignSettingComponent } from './option/option-design-setting/option-design-setting.component';
import { OptionMyColorComponent } from './option/option-design-setting/option-my-color/option-my-color.component';
import { OptionNoteWidthComponent } from './option/option-design-setting/option-note-width/option-note-width.component';
import { OptionTouchNoteColorComponent } from './option/option-design-setting/option-touch-note-color/option-touch-note-color.component';
import { OptionChainNoteColorComponent } from './option/option-design-setting/option-chain-note-color/option-chain-note-color.component';
import { OptionSlideNoteLeftColorComponent } from './option/option-design-setting/option-slide-note-left-color/option-slide-note-left-color.component';
import { OptionSlideNoteRightColorComponent } from './option/option-design-setting/option-slide-note-right-color/option-slide-note-right-color.component';
import { OptionSnapNoteUpColorComponent } from './option/option-design-setting/option-snap-note-up-color/option-snap-note-up-color.component';
import { OptionSnapNoteDownColorComponent } from './option/option-design-setting/option-snap-note-down-color/option-snap-note-down-color.component';
import { OptionHoldNoteColorComponent } from './option/option-design-setting/option-hold-note-color/option-hold-note-color.component';
import { OptionSlideColorInvertComponent } from './option/option-design-setting/option-slide-color-invert/option-slide-color-invert.component';
import { OptionTouchEffectPopComponent } from './option/option-design-setting/option-touch-effect-pop/option-touch-effect-pop.component';
import { OptionTouchEffectShootComponent } from './option/option-design-setting/option-touch-effect-shoot/option-touch-effect-shoot.component';
import { OptionKeyBeamComponent } from './option/option-design-setting/option-key-beam/option-key-beam.component';
import { OptionRNoteEffectComponent } from './option/option-design-setting/option-r-note-effect/option-r-note-effect.component';
import { OptionSoundSettingComponent } from './option/option-sound-setting/option-sound-setting.component';
import { OptionNoteTouchSeComponent } from './option/option-sound-setting/option-note-touch-se/option-note-touch-se.component';
import { MissionComponent } from './mission/mission.component';
import { BoxComponent } from './box/box.component';
import { BoxTopComponent } from './box/box-top/box-top.component';
import { BoxDetailComponent } from './box/box-detail/box-detail.component';
import { BoxDrawComponent } from './box/box-draw/box-draw.component';
import { MusicUnlockComponent } from './music-unlock/music-unlock.component';
import { MusicDetailComponent } from './play-data/music/music-detail/music-detail.component';


@NgModule({
  declarations: [
    GameComponent,
    PlayDataComponent,
    MusicComponent,
    PlayerComponent,
    GateComponent,
    HistoryComponent,
    RatingComponent,
    PresetComponent,
    CollectionComponent,
    SpecialComponent,
    CustomComponent,
    IconComponent,
    PlateComponent,
    NaviCharacterComponent,
    TrophyComponent,
    StageupComponent,
    StageupDetailComponent,
    FriendListComponent,
    FriendComponent,
    FriendVisibilityComponent,
    FriendFindComponent,
    FriendPlayerComponent,
    FriendApplyingComponent,
    FriendAcceptingComponent,
    RankingComponent,
    MusicHighScoreComponent,
    MusicHighScoreDetailComponent,
    TotalHighScoreDetailComponent,
    StageupScoreComponent,
    StageupScoreDetailComponent,
    WpScoreDetailComponent,
    OptionTopComponent,
    OptionPlayerNameComponent,
    OptionGameSettingComponent,
    OptionNoteSpeedComponent,
    OptionJudgeLineTimingComponent,
    OptionMaskComponent,
    OptionMovieComponent,
    OptionBonusNoteEffectComponent,
    OptionMirrorComponent,
    OptionGiveupComponent,
    OptionDisplaySettingComponent,
    OptionJudgePositionComponent,
    OptionJudgeDetailComponent,
    OptionInformationMaskComponent,
    OptionGuideLineIntervalComponent,
    OptionGuideMeasureLineComponent,
    OptionCenterDisplayComponent,
    OptionScoreDisplayComponent,
    OptionMultiRankDisplayComponent,
    OptionEmblemDisplayComponent,
    OptionRateDisplayComponent,
    OptionPlayerLevelDisplayComponent,
    OptionGateDirectingSkipComponent,
    OptionMissionDirectingSkipComponent,
    OptionGuideLineMaskComponent,
    OptionDesignSettingComponent,
    OptionMyColorComponent,
    OptionNoteWidthComponent,
    OptionTouchNoteColorComponent,
    OptionChainNoteColorComponent,
    OptionSlideNoteLeftColorComponent,
    OptionSlideNoteRightColorComponent,
    OptionSnapNoteUpColorComponent,
    OptionSnapNoteDownColorComponent,
    OptionHoldNoteColorComponent,
    OptionSlideColorInvertComponent,
    OptionTouchEffectPopComponent,
    OptionTouchEffectShootComponent,
    OptionKeyBeamComponent,
    OptionRNoteEffectComponent,
    OptionSoundSettingComponent,
    OptionNoteTouchSeComponent,
    MissionComponent,
    BoxComponent,
    BoxTopComponent,
    BoxDetailComponent,
    BoxDrawComponent,
    MusicUnlockComponent,
    MusicDetailComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
